"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";
import { ComponentType, LazyExoticComponent } from "react";
import { MDXComponents } from "mdx/types";

import FancyLink from "./FancyLink/FancyLink";
import FancyCode from "./FancyCode/FancyCode";
import FancyImage from "./FancyImage/FancyImage";

interface CustomMDXProps {
  postFileName: string;
  postType: PostType;
}

export default function CustomMDX({ postFileName, postType }: CustomMDXProps) {
  const MDX = dynamic(() => import(`@/src/statics/${postType}/${postFileName}.mdx`)) as LazyExoticComponent<
    ComponentType<MDXComponents>
  >;

  return <MDX components={{ a: FancyLink, code: FancyCode, img: FancyImage } as any} />;
}
