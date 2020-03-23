import tpl_0 from './tpl/tpl_0.tpl';
import tpl_1 from './tpl/tpl_1.tpl';
import tpl_2 from './tpl/tpl_2.tpl';
import tpl_3 from './tpl/tpl_3.tpl';
import './index.scss';
import tools from '../../utils/tools';

export default () => {
	return {
		name: 'newsItem',
		tpl (data, pageNum) {
      let list = '',
          template = '';

      data.forEach((item, index) => {
        if (!item.thumbnail_pic_s) {
        	template = tpl_0();
        } else if (item.thumbnail_pic_s && !item.thumbnail_pic_s02) {
        	template = tpl_1();
        } else if (item.thumbnail_pic_s02 && !item.thumbnail_pic_s03) {
        	template = tpl_2();
        } else if (item.thumbnail_pic_s03) {
        	template = tpl_3();
        }

        list += template.replace(tools.tplReplace(), (node, key) => {
          return {
            pageNum,
            index,
            uniquekey: item.uniquekey,
            url: item.url,
            author: item.author_name,
            date: item.date,
            thumbnail_pic_s: item.thumbnail_pic_s,
						thumbnail_pic_s02: item.thumbnail_pic_s02,
						thumbnail_pic_s03: item.thumbnail_pic_s03,
						title: item.title
          }[key];
        });
      }); 

      return list;
		}
	}
}