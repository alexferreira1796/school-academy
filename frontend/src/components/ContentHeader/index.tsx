import React from "react";
import * as S from "./styles";

type TContentHeaderProps = {
  title: string;
  lineColor?: string;
  children?: React.ReactNode;
};

const ContentHeader: React.FC<TContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <S.Container>
      <S.TitleContainer lineColor={lineColor || "#e16e0e"}>
        <h1>{title}</h1>
      </S.TitleContainer>
      <S.Controllers>{children}</S.Controllers>
    </S.Container>
  );
};

export default ContentHeader;
