import tpl from './index.tpl';
import './index.scss';
import tools from '../../utils/tools';

export default () => {
	return {
		name: 'noContentTip',
		tpl (text) {
			return tpl().replace(tools.tplReplace(), text);
		}
	}
}