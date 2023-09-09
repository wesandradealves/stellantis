import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Aventure from '../../sections/Aventure/Aventure';
import { DataLayer } from '../Track/DataLayer/DataLayer';
import { Button, Container } from './styles';

const Tabs = ({ data, isOpen, handleTab }) => {
  const [tab, setTab] = useState();
  useEffect(() => {
    if (data.length) setTab(data[0].brand);
  }, [data]);
  useEffect(() => {
    setTab(isOpen);
  }, [isOpen]);
  return (
    <Container id="all-compass">
      <h2 className="tltTabs">TUDO DO JEEP COMPASS</h2>

      <header>
        {data.map((item, index) => (
          <Button
            key={`tabs-button-${index}`}
            isActive={item.brand === tab}
            onClick={() => {
              setTab(item.brand);
              DataLayer.push(
                'TudoDoCompass_ClicouFeature',
                item.brand,
              );
            }}
          >
            <span>{item.productDetailsName}</span>
            <FiChevronDown className="ChevronDown" />
          </Button>
        ))}
      </header>

      {data.map(
        item =>
          item.brand === tab && (
            <Aventure
              key={`tabs-aventure-${item.data}`}
              data={item.data}
            />
          ),
      )}
    </Container>
  );
};

export default Tabs;
