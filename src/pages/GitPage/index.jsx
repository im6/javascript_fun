import React from 'react';
import PropTypes from 'prop-types';
import AppContainer from '../../components/AppContainer';
import BoxGroup from '../../components/BoxGroup';
import GitBox from '../../components/GitBox';

const GitPage = ({
  url,
  source,
  githubUrl,
  iconCdnUrl,
  defaultIcon,
  criticalCss,
}) => (
  <AppContainer url={url} criticalCss={criticalCss}>
    {source.map(v => (
      <BoxGroup key={v.id} title={v.name}>
        {v.list.map(v1 => (
          <GitBox
            key={v1.github}
            name={v1.name}
            img={`${iconCdnUrl}/${v1.img || defaultIcon}`}
            star={v1.star}
            url={`${githubUrl}/${v1.github}`}
          />
        ))}
      </BoxGroup>
    ))}
  </AppContainer>
);

GitPage.propTypes = {
  url: PropTypes.string,
  source: PropTypes.array,
  githubUrl: PropTypes.string,
  iconCdnUrl: PropTypes.string,
  defaultIcon: PropTypes.string,
  criticalCss: PropTypes.node,
};

export default GitPage;