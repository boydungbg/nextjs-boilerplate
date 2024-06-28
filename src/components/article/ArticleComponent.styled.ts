"use client";
import { Box, BoxProps, Typography, styled } from "@mui/material";
import { TypographyProps } from "@mui/system";

export const ArticleContent = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2, 1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  width: "100%",
}));

export const ArticleTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontSize: "1.8rem",
    fontWeight: 700,
  })
);

export const ArticleDescription = styled(Typography)(() => ({}));
