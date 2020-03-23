import '../scss/detail.scss';

import Header from '../components/header/index';
import NewsFrame from '../components/news_frame/index';
import Collector from '../components/collector/index';

import tools from '../utils/tools';

const header = new Header(),
    newsFrame = new NewsFrame(),
    collector = new Collector();

const App = ($) => {
    const $app = $('#app'),
        $frameWrapper = $app.children('.frame-wrapper'),
        target = JSON.parse(localStorage.getItem('target')),
        newsUrl = tools.getUrlQueryValue('news_url') || target.url,
        uniquekey = tools.getUrlQueryValue('uniquekey') || target.uniquekey;

    let collections = JSON.parse(localStorage.getItem('collections')) || {},
        collected = Boolean(collections[uniquekey]);

    const init = () => {
        render().then(bindEvent);
    }

    const render = () => {
        return new Promise((resolve, reject) => {
            _renderHeader();
            _renderFrame(newsUrl);
            _renderCollector(collected);
            resolve();
        });
    }

    const bindEvent = () => {
        $('.collector').on('click', newsCollect);
    }

    const _renderHeader = () => {
        $app.append(header.tpl({
            title: '新闻详情',
            showLeftIcon: true,
            showRightIcon: false
        }));
    }

    const _renderFrame = (newsUrl) => {
        $frameWrapper.append(newsFrame.tpl(newsUrl));
    }

    const _renderCollector = (collected) => {
        $app.append(collector.tpl(collected));
    }

    function newsCollect() {
        console.log(1);
        if (collections[uniquekey]) {
            delete collections[uniquekey];
            collected = false;
        } else {
            collections[uniquekey] = JSON.parse(localStorage.getItem('target'));
            collected = true;
        }

        localStorage.setItem('collections', JSON.stringify(collections));
        collector.changeCollector(collected);
    }

    init();
}

App(Zepto);