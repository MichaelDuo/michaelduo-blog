import {graphql} from 'gatsby';
import React from 'react';
import Layout from '../ui/Layout';
import Header from '../components/Header';
import _ from 'lodash';
import {LightAsync as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
	data: any;
}

const Blog = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const {markdownRemark: post} = props.data;
	return (
		<Layout>
			<MDHtml ast={post.htmlAst} />
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
	} else if (ast.tagName === 'code') {
		const code = _.get(ast.children, '0.value', '');
		const language = _.get(ast.properties, 'className.0', '').replace(
			'language-',
			''
		);

		return (
			<SyntaxHighlighter language={language} style={a11yDark}>
				{code}
			</SyntaxHighlighter>
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
