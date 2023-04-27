import React, { MouseEventHandler } from "react";
import { joinClasses } from "./";

import "./_Icons.scss";
import { IconClassNames } from "./IconsResources";

type TIconStyles = { [propName: string]: string | number };

/**
 *
 * @param iconName not case sensitive
 * @param additionalStyles
 * @returns
 */
export const getIconJSX = (
  iconName: string,
  onClick?: MouseEventHandler<HTMLElement>,
  additionalStyles?: TIconStyles,
  additionalAttributes?: any
) => {
  const classNames = IconClassNames.get(iconName.trim());
  if (!classNames) return null;

  return (
    <i
      className={joinClasses("icon", ...classNames)}
      style={additionalStyles}
      onClick={onClick}
      {...additionalAttributes}
    />
  );
};

export const placeIconsJSXRandomly = (
  count: number,
  additionalStyles?: TIconStyles
) => {
  // TODO: fix the boundary at the end
  // if (count > 30 || count < 0) {
  //   throw new Error("random icons can't be under 0 or over 30!");
  // }

  const asArr = Array.from(IconClassNames.values());
  const iconsJSX: Array<JSX.Element> = [];

  for (let i = 0, j = 0; i < count; ++i, ++j) {
    if (j >= IconClassNames.size) {
      j = 0;
    }
    const [el1, el2] = asArr[j]!;

    iconsJSX.push(
      <i
        key={`${i}--${el2}`}
        className={joinClasses("icon", "placed-randomly", `${el1} ${el2}`)}
        style={additionalStyles}
      />
    );
  }

  return <>{iconsJSX}</>;
};
