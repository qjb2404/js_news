import tpl from './index.tpl';
import './index.scss';
import tools from '../../utils/tools';

export default () => {
	return {
		name: 'collector',
		tpl (collected) {
			return tpl().replace(tools.tplReplace(), collected ? 'full' : 'o');
		},

		changeCollector (collected) {
			$('.collector').addClass(collected ? 'full' : 'o')
                           .removeClass(collected ? 'o' : 'full');
		}
	}
}