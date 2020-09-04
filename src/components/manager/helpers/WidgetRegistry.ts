import React from 'react';
import {ActionProvider} from './ActionProvider';
import {ChatBotConfigsObject, Widget} from './types';

export class WidgetRegistry {
  setState: React.Dispatch<any>;
  actionProvider: ActionProvider;
  registeredWidgets: {[widgetName: string]: Widget};

  constructor(
    setState: React.Dispatch<any>,
    actionProvider: ActionProvider,
    ChatBotConfigs: ChatBotConfigsObject,
  ) {
    this.setState = setState;
    this.actionProvider = actionProvider;
    this.registeredWidgets = {};

    ChatBotConfigs.widgets.forEach((widget) => this.addWidget(widget));
  }

  addWidget = ({
    widgetName,
    widgetComponent,
    mapStateToProps,
    props,
  }: Widget) => {
    this.registeredWidgets[widgetName!] = {
      widgetComponent,
      props,
      mapStateToProps,
    };
  };

  getWidget = (widgetName: string, state: any) => {
    const widgetObject = this.registeredWidgets[widgetName];

    let props = {
      ...widgetObject.props,
      ...this.mapStateToProps(widgetObject.mapStateToProps, state),
      setState: this.setState,
      actionProvider: this.actionProvider,
    };

    return widgetObject.widgetComponent(props);
  };

  mapStateToProps = (props: any, state: any) => {
    if (props) {
      return props.reduce((acc: any, prop: any) => {
        acc[prop] = state[prop];
        return acc;
      }, {});
    }
  };
}
