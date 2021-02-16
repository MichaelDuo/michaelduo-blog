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

interface Props {
	data: any;
}

const Blog = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<Layout>
			<div className="markdown-body">Hello</div>
		</Layout>
	);
};

export default Blog;
