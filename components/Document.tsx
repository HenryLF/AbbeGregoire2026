import { PropsWithChildren } from "preact/compat";

export interface DocumentProps extends PropsWithChildren {
  title?: string;
}

export function Document({ title, children }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
