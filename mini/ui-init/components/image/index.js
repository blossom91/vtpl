/**
 * @file 组件 image 图像
 * @author zhaohang12@baidu.com
 * @date 2021-04-15 17:52:44
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

const prefixCls = 's-image';
const sizeMap = {};

// 图片宽高比: http://bdbox.baidu.com/ceued-docs/design/component/image/
const sizeType = [
    '1:1',
    '2:3', // extra added
    '3:1',
    '3:2',
    '3:4',
    '4:3',
    '5:2',
    '16:9',
    '21:4',
    'full',
];

// 默认宽高比
const defaultSize = sizeType[0];
sizeType.forEach(size => {
    if ('full' === size) {
        sizeMap[size] = 0;
    } else {
        const sizeVal = size.split(':');
        sizeMap[size] = sizeVal[1] / sizeVal[0];
    }
});

class Image extends PureComponent {
    static propTypes = {
        cancelBubble: PropTypes.bool,
        size: PropTypes.oneOf(sizeType),
        hairline: PropTypes.bool,
        url: PropTypes.string,
    };

    static defaultProps = {
        cancelBubble: true,
        size: defaultSize,
        hairline: true,
        url: '',
    };

    get wrapClass() {
        const hairline = this.props.hairline;
        return cls(`${prefixCls}-wrapper`, {
            [`${prefixCls}-hairline`]: hairline,
        });
    }

    get imageStyle() {
        const {size, url} = this.props;
        const isFull = 'full' === size;
        return {
            paddingTop: `${sizeMap[size] * 100}%`,
            height: isFull ? '100%' : 'auto',
            backgroundImage: url ? `url(${url})` : '',
        };
    }

    handleTouchEvent(e) {
        let cancelBubble = this.props.cancelBubble;
        !cancelBubble && e.stopPropagation();
    }

    render() {
        const {children} = this.props;
        return (
            <div
                className={this.wrapClass}
                onTouchStart={this.handleTouchEvent}
                onTouchEnd={this.handleTouchEvent}
                onTouchCancel={this.handleTouchEvent}
            >
                <div className={`${prefixCls}-default`} />
                <div className={`${prefixCls}`} style={this.imageStyle}>
                    {!!children && children}
                </div>
            </div>
        );
    }
}

export default Image;
