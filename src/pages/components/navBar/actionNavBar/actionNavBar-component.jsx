import "./actionNavBar-component.css";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Font Awsome Icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// Chakra components
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const ActionNavBar = (isProduct = false) => {
  if (isProduct) {
    return (
      <div>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FontAwesomeIcon icon={faMagnifyingGlass} color="#7a7a7a"/>}
          />
          <Input placeholder="Search" focusBorderColor="brand.500" />
        </InputGroup>
      </div>
    );
  } else {
    return <div>Soy un icono de fav</div>;
  }
};
