import React from 'react';
import {ActionProvider} from './ActionProvider';
import {ChatBotConfigsObject, Widget} from './types';

export class WidgetRegistry {
  setState: React.Dispatch<any>;
  actionProvider: ActionProvider;

  constructor(
    setState: React.Dispatch<any>,
    actionProvider: ActionProvider,
    ChatBotConfigs: ChatBotConfigsObject,
  ) {
    this.setState = setState;
    this.actionProvider = actionProvider;

    ChatBotConfigs.widgets.forEach((widget) => this.addWidget(widget));
  }

  addWidget = ({
    widgetName,
    widgetComponent,
    mapStateToProps,
    props,
  }: Widget) => {
    this[widgetName] = {
      widget: widgetComponent,
      props,
      mapStateToProps,
    };
  };

  getWidget = (widgetName: string, state: any) => {
    const widgetObject = this[widgetName];

    if (!widgetObject) {
      return;
    }

    let props = {
      scrollIntoView: state.scrollIntoView,
      ...widgetObject.props,
      ...this.mapStateToProps(widgetObject.mapStateToProps, state),
      setState: this.setState,
      actionProvider: this.actionProvider,
    };

    return widgetObject.widget(props);
  };

  mapStateToProps = (props: any, state: any) => {
    if (!props) {
      return;
    }

    return props.reduce((acc: any, prop: any) => {
      acc[prop] = state[prop];
      return acc;
    }, {});
  };
}
