import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ArticleInsights({ data, icon }) {
    return (
        <>
            <FontAwesomeIcon icon={icon} size="sm" className="mr-[2px]" />
            <span className="mr-3">{data}</span>
        </>
    )
}

export default ArticleInsights



