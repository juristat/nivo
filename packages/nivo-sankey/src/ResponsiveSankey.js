/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import { ResponsiveWrapper } from '@juristat/nivo-core'
import Sankey from './Sankey'

const ResponsiveSankey = props => (
    <ResponsiveWrapper>
        {({ width, height }) => <Sankey width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)

export default ResponsiveSankey
