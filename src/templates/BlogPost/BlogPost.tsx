import {graphql} from 'gatsby';
import React from 'react';
import Header from '../../components/Header';
import Link from '../../components/Link';
import _ from 'lodash';
import {LightAsync as SyntaxHighlighter} from 'react-syntax-highlighter';
import {
	a11yDark,
	a11yLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './BlogPost.css';
import BlogLayout from '../../ui/BlogLayout';

const loadBlogComponents = (require as any).context(
	'../../blogComponents',
	true,
	/.*/
);

interface Props {
	data: any;
	pathContext: any;
}

const Blog = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const {markdownRemark: post} = props.data;
	const titleAst = _.get(post.htmlAst, 'children.0');
	const htmlAst = {...post.htmlAst};

	if (
		post.frontmatter.date &&
		titleAst &&
		['h1', 'h2'].includes(titleAst.tagName)
	) {
		htmlAst.children = [...htmlAst.children];
		htmlAst.children.splice(1, 0, {
			type: 'element',
			properties: {className: 'post-date'},
			tagName: 'p',
			children: [
				{
					type: 'text',
					value: `Posted on ${post.frontmatter.date}`,
				},
			],
		});
	}

	return (
		<BlogLayout pathContext={props.pathContext}>
			<div className="markdown-body">
				<MDHtml ast={htmlAst} />
			</div>
		</BlogLayout>
	);
};

export const query = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: {path: {eq: $path}}) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
			htmlAst
		}
	}
`;

interface HtmlAst {
	type: string;
	tagName: string;
	properties: any;
	value: string;
	children: HtmlAst[];
}

const MDHtml = (props: React.PropsWithChildren<{ast: HtmlAst}>) => {
	const {ast} = props;
	// console.log('-----', ast);
	const componentReg = /^{{\s*"component":\s*"(.*)"\s*}}/;

	let children = null;
	if (ast.children && ast.children.length) {
		children = ast.children.map((child, idx) => {
			return <MDHtml key={idx} ast={child} />;
		});
	}

	if (ast.type === 'root') {
		return <>{children}</>;
	} else if (ast.type === 'text') {
		return <>{ast.value}</>;
	} else if (['h1', 'h2', 'h3'].includes(ast.tagName)) {
		return <Header type={ast.tagName as any}>{children}</Header>;
	} else if (
		ast.tagName === 'p' &&
		componentReg.test(_.get(ast, 'children.0.value'))
	) {
		const Component = loadBlogComponents(
			`./${ast.children[0].value.match(componentReg)[1]}`
		).default;
		return <Component />;
	} else if (ast.tagName === 'a') {
		return <Link to={_.trim(ast.properties.href, '~')}>{children}</Link>;
	} else if (
		ast.tagName === 'pre' &&
		_.get(ast, 'children.0.tagName') === 'code'
	) {
		// code block
		const code = _.get(ast.children[0].children, '0.value', '');
		const language = _.get(
			ast.children[0].properties,
			'className.0',
			''
		).replace('language-', '');
		return (
			<SyntaxHighlighter language={language} style={a11yDark}>
				{_.trim(code)}
			</SyntaxHighlighter>
		);
	} else if (ast.tagName === 'code') {
		const code = _.get(ast.children, '0.value', '');
		return (
			<span className=" border px-1">
				<SyntaxHighlighter
					language={'c'}
					style={a11yLight}
					PreTag={'span'}
					customStyle={{
						display: 'inline-block',
						padding: '0px',
						overflowX: 'none',
					}}
				>
					{code}
				</SyntaxHighlighter>
			</span>
		);
	} else {
		return (
			// eslint-disable-next-line
			// @ts-ignore
			<ast.tagName {...ast.properties}>{children}</ast.tagName>
		);
	}
};

export default Blog;
