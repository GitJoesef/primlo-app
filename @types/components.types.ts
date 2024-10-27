import { ReactNode } from "react";

export interface ISafeAreaComponentProps {
  altClassName?: string;
  [key: string]: string | number | undefined | JSX.Element | JSX.Element[];
}

export type TAppLayoutProps = {
  children: ReactNode;
  altClassName?: string;
  childrenContainerClassName?: string;
};