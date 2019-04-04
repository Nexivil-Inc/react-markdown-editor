import React from 'react';
import { withStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

export const ToolbarButton = props => {
    const { buttonComponentClass, buttonContent, buttonProps, onClick, readOnly, name } = props;
    const finalButtonComponent = buttonComponentClass || "button";
}