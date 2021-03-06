import React from 'react';

import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { BodyText, H4, KeyData } from './';

const Stolen = styled(BodyText)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
`;

const Container = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  margin-bottom: 8px;
  border-radius: 8px;
  padding: 8px;

  :hover {
    border: ${({ theme }) => `1px solid ${theme.colors.primary08}`};
    background-color: ${({ theme }) => theme.colors.primary02};
    cursor: pointer;
  }
`;

type PropsType = {
  title: string;
  frameColor: string;
  frameModel: string;
  isStolen: boolean;
  onClick?: () => void;
};
export const BikeItem: React.FC<PropsType> = ({ title, isStolen, frameColor, frameModel, onClick }) => {
  const { t } = useTranslation();

  return (
    <Container onClick={onClick} data-testid="BikeItem">
      <H4>{title}</H4>
      {isStolen && <Stolen>{t('Common.stolen')}</Stolen>}
      <KeyData dataKey={t('Common.frameModel')} value={frameModel} />
      <KeyData dataKey={t('Common.frameColors')} value={frameColor} />
    </Container>
  );
};
