import { useAppDispatch } from "../stateManager/stateManager";
import React, { FC } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { setBalance } from "../stateManager/balanceSlice";

const updateBalance = () => {
  const dispatch = useAppDispatch();

  const onChange = (e: any): void => {
    dispatch(setBalance(55));
  };

  return <div> hey </div>;
};
const Balance: FC = ({}) => {
  return (
    <Row>
      <Col>
        <Button
          variant="success"
          onClick={() => {
            updateBalance();
          }}
        >
          ADD
        </Button>
      </Col>
    </Row>
  );
};

export default Balance;
