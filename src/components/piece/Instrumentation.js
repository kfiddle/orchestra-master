import { useEffect } from 'react';

import Enums from '../enums/Enums';

import styles from './Instrumentation.module.css';

const Instrumentation = (props) => {
    const initialEnums = [...Enums];

    let startingObject = {};
  
    for (let instName of initialEnums) {
      startingObject = { ...startingObject, [instName]: 0 };
    }
  
    const [instrumentEnumsObject, setInstrumentEnumsObject] =
      useState(startingObject);
    const currentPerformancePiece = props.pp ? props.pp : "";
  
    const submitOrchestration = async (event) => {
      event.preventDefault();
      let flag = true;
  
      for (let instEnum in instrumentEnumsObject) {
        for (let j = 0; j < instrumentEnumsObject[instEnum]; j++) {
          const sendItUp = await PushBasic(
            {
              performancePiece: currentPerformancePiece,
              instrumentEnum: instEnum,
            },
            "add-ppp"
          );
          if (!sendItUp.ok) {
            flag = false;
          }
        }
      }
      if (flag) {
        props.closeModal();
      }
    };
  
    const populator = (event, label) => {
      setInstrumentEnumsObject({
        ...instrumentEnumsObject,
        [label]: +event.target.value,
      });
    };
  
    const inputter = {
      label: "",
      populator,
    };


};

export default Instrumentation;