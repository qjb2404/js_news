import tpl from './index.tpl';
import './index.scss';
import tools from '../../utils/tools';

export default () => {
	return {
		name: 'newsFrame',
		tpl (url) {
      return tpl().replace(tools.tplReplace(), url);     
		}
	}
}




