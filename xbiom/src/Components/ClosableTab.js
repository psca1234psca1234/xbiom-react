import React, { useState } from 'react';
import { render } from 'react-dom';
import CloseableTabs from 'react-closeable-tabs';

function ClosableTab() {
  const [data, setData] = useState([
    {
      tab: 'List',
      component: <div><h1>Your list</h1></div>,
      id: 0
    },
    {
      tab: 'Item detail 1',
      component: <div>Item details for 1</div>,
      id: 1,
      closeable: true
    },
    {
      tab: 'Item detail 2',
      component: <div>Item details for 2</div>,
      id: 2,
      closeable: true
    },
    {
      tab: 'Item detail 3',
      component: <div>Item details for 3</div>,
      id: 3,
      closeable: true
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const addItem = () => {
    const id = new Date().valueOf();
    setData((prevData) => {
      const newData = [
        ...prevData,
        {
          tab: 'New item ' + id,
          component: (
            <div>
              Your new component data for {id.toString().substring(6, 10)}
            </div>
          ),
          id: id,
          closeable: true
        }
      ];
      setActiveIndex(newData.length - 1);
      return newData;
    });
  };

  const onCloseTab = (id, newIndex) => {
    setData((prevData) => {
      const newData = prevData.filter((item) => item.id !== id);
      setActiveIndex(newIndex);
      return newData;
    });
  };

  return (
    <div>
      <button onClick={addItem}>Add item</button>
      <CloseableTabs
        tabPanelColor="lightgray"
        data={data}
        onCloseTab={onCloseTab}
        activeIndex={activeIndex}
      />
    </div>
  );
}

export default ClosableTab;