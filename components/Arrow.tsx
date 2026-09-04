import { ComponentProps } from "preact/compat";

export interface ArrowProps extends ComponentProps<"svg"> {
  colorStart: string;
  colorEnd: string;
  xRatio?: number; 
  yRatio?: number;
  linewidth? :number; //let's use this body height
}

export function Arrow({
  colorStart,
  colorEnd,
  xRatio = 1.2,
  yRatio = 1.2,
  linewidth = 8,
  ...props
}: ArrowProps) {
  const x0 = 0, x1 = 200, cy = 50;
  const bodyHalf = linewidth;
  const headHalf = bodyHalf * yRatio;
  // xRatio = head length / head diameter (aspect ratio of the head triangle)
  const headX = x1 - headHalf * 2 * xRatio; // x of head-body boundary

  const bT = cy - bodyHalf;
  const bB = cy + bodyHalf;
  const hT = cy - headHalf;
  const hB = cy + headHalf;
  const path = `M ${x1} ${cy} L ${headX} ${hT} L ${headX} ${bT} L ${x0} ${bT} L ${x0} ${bB} L ${headX} ${bB} L ${headX} ${hB} Z`;

  const sanitize = (c: string) => c.replace(/[^a-zA-Z0-9]/g, "");
  const gradId = `arrowGrad-${sanitize(colorStart)}-${sanitize(colorEnd)}`;

  const vb = `${x0} ${hT} ${x1 - x0} ${hB - hT}`;

  return (
    <svg
      viewBox={vb}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color={colorStart} />
          <stop offset="100%" stop-color={colorEnd} />
        </linearGradient>
      </defs>
      <path d={path} fill={`url(#${gradId})`} />
    </svg>
  );
}
