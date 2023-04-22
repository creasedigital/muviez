
import {DemoContent, DemoModal} from './style';
import {ModalComponentProps} from "../../../../components/Modal/types"
import { useRef } from 'react';
import { useOnClickOutside } from '../../../../hooks';



const DemoWelcomeModal = ({show, onClose, children}:   ModalComponentProps)=>{
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, onClose);
  return show? (
    <DemoModal>
      <DemoContent  ref={ref}>
        {children}
      </DemoContent>
    </DemoModal>

  ): null;

}
export default DemoWelcomeModal;

