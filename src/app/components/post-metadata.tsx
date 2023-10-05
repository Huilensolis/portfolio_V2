"use client";

import { useEffect, useRef, useState } from "react";
import { InterfacePostMetadata } from "../interfaces/post-metadata.interface";
import RelativeTime from "./relative-time";

export function PostMetadata({
  metaData,
  useObserver = false,
  callback,
}: {
  metaData: InterfacePostMetadata;
  useObserver?: boolean;
  callback?: null | (() => void);
}) {
  const postMetadataRef = useRef(null);
  useEffect(() => {
    if (useObserver && callback) {
      const options = {
        root: null,
        rootMargin: "100px",
        threshold: 0.3,
      };
      const observerCallback = (entries: any, observer: any) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            callback()
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, options);
      observer.observe(postMetadataRef.current as any);
    }
  }, [useObserver, callback, postMetadataRef]);

  return (
    <article ref={postMetadataRef}>
      <h2 className="font-bold text-4xl dark:text-cm-white text-cm-black">
        {metaData.title}
      </h2>
      <p className="text-gray-400">{metaData.subtitle}</p>
      <span className="text-gray-400">
        <RelativeTime date={Date.parse(metaData.date)} />
      </span>
    </article>
  );
}
