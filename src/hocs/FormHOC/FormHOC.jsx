import React from 'react';
import { Button } from "@nextui-org/react";

import './styles.scss';

const FormHOC = ({ 
  children,
  titleValue,
  subtitleValue,
  footerText,
  footerLinkText,
  footerLinkAction,
  buttonText,
  buttonOnclick,
}) => {
  return (
    <div className="form">
      {titleValue && (
        <div className="form__title">
          <h2>{titleValue}</h2>
        </div>
      )}

      {subtitleValue && (
        <div className="form__subtitle">
          <p>{subtitleValue}</p>
        </div>
      )}

      {children}

      <Button 
        color="primary"
        className="form__button primary-button"
      >
        {buttonText}
      </Button>

      {(footerText || footerLinkText) && (
        <div className="form__footertext-group">
          <div className="form__footertext-group-wrapper">
            <div className="flex gap-1">
              <p className="form__footertext-group-text">{footerText}</p>

              <a href={footerLinkAction} className="form__footertext-group-link">
                {footerLinkText}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default FormHOC;
