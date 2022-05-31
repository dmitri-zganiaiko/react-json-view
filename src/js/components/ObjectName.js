import React, { Fragment } from 'react';
import Theme from './../themes/getStyle';

export default function getObjectName(props) {
    const {
        parent_type, namespace, theme, jsvRoot, name, keyRenderer
    } = props;

    const display_name = props.name ? props.name : '';

    if (jsvRoot && (name === false || name === null)) {
        return (<span />);
    } else if (parent_type == 'array') {
        return (
            <span {...Theme(theme, 'array-key')} key={namespace}>
                <span class="array-key">{display_name}</span>
                <span {...Theme(theme, 'colon')}>:</span>
            </span>
        );
    } else {
        return (
            <span {...Theme(theme, 'object-name')} key={namespace}>
                <span class="object-key">
                    {keyRenderer ? keyRenderer(props) :
                    <Fragment>
                        <span style={{ verticalAlign: 'top' }}>"</span>
                        <span style={{ display: 'inline-block' }}>
                            {display_name}
                        </span>
                        <span style={{ verticalAlign: 'top' }}>"</span>
                    </Fragment>
                    }
                </span>
                <span {...Theme(theme, 'colon')}>:</span>
            </span>
        );
    }
}
