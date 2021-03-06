import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './percentageGraph.scss';

const PercentageGraph = ({
    className,
    percentage
}) => (
    <span className={classNames('percentage-graph', `percent-${percentage}`, className)} />
);

PercentageGraph.defaultProps = {
    className: undefined,
    percentage: 100
};

PercentageGraph.propTypes = {
    className: PropTypes.string,
    percentage: PropTypes.number
};

export default PercentageGraph;
