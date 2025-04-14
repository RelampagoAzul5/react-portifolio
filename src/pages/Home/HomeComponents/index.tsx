import React from 'react';
import { GeneralInfo } from './GeneralInfos';
import { Qualifications } from './Qualifications';
import { Technologies } from './Technologies';

export function HomeComponents() {
  return (
    <>
      <GeneralInfo />
      <Qualifications />
      <Technologies />
    </>
  );
}
