import { Application, KultPlugin, PluginBase } from '@kult/core';

@KultPlugin('Plugin Template')
export default class PluginTemplate extends PluginBase {
  constructor(app: Application) {
    super(app)
  }
}
