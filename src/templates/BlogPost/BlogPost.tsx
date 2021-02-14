import {graphql} from 'gatsby';
import React from 'react';
import Layout from '../../ui/Layout';
import Header from '../../components/Header';
import Link from '../../components/Link';
import _ from 'lodash';
import {LightAsync as SyntaxHighlighter} from 'react-syntax-highlighter';
import {
	a11yDark,
	a11yLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './BlogPost.css';

interface Props {
	data: any;
}

const Blog = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const {markdownRemark: post} = props.data;
	return (
		<Layout>
			<div className="markdown-body">
				<MDHtml ast={post.htmlAst} />
			</div>
		</Layout>
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
	} else if (ast.tagName === 'a') {
		const href = ast.properties.href;
		return <Link to={href}>{children}</Link>;
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
				{code}
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
		// console.log(ast);
		return (
			// eslint-disable-next-line
			// @ts-ignore
			<ast.tagName>{children}</ast.tagName>
		);
	}
};

export default Blog;
