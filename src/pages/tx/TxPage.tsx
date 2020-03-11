import "./TxPage.css";

import { IndexedTx, types } from "@cosmwasm/sdk";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { FooterRow } from "../../components/FooterRow";
import { Header } from "../../components/Header";
import { ClientContext } from "../../contexts/ClientContext";
import { ellideMiddle } from "../../ui-utils";
import { MsgExecuteContract } from "./msgs/MsgExecuteContract";
import { MsgSend } from "./msgs/MsgSend";
import { TxInfo } from "./TxInfo";

export function TxPage(): JSX.Element {
  const clientContext = React.useContext(ClientContext);
  const { txId: txIdParam } = useParams();
  const txId = txIdParam || "";

  const pageTitle = <span title={txId}>Tx {ellideMiddle(txId, 20)}</span>;

  const [details, setDetails] = React.useState<IndexedTx | undefined | "loading">("loading");

  React.useEffect(() => {
    clientContext.client.searchTx({ id: txId }).then(results => {
      const firstResult = results.find(() => true);
      setDetails(firstResult);
    });
  }, [clientContext.client, txId]);

  return (
    <div className="page">
      <Header />
      <div className="container mt-3">
        <div className="row white-row white-row-first">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {pageTitle}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row white-row">
          <div className="col">
            <h1>{pageTitle}</h1>
            <ul className="list-group list-group-horizontal mb-3">
              <li className="list-group-item">
                Height: {details === "loading" ? "Loading..." : details?.height || "–"}
              </li>
              <li className="list-group-item">
                Time: {details === "loading" ? "Loading..." : details?.timestamp || "–"}
              </li>
            </ul>
          </div>
          <div className="col">
            {details === "loading" ? (
              <span>Loading …</span>
            ) : details ? (
              <TxInfo tx={details.tx} />
            ) : (
              <p>Transaction not found</p>
            )}
          </div>
        </div>

        <div className="row white-row white-row-last">
          <div className="col">
            <h2>Messages</h2>
            <p>
              A Cosmos SDK transaction is composed of one or more messages, that represent actions to be
              executed.
            </p>
            {details === "loading" ? (
              <p>Loading …</p>
            ) : details === undefined ? (
              <p>Transaction not found</p>
            ) : (
              details.tx.value.msg.map((msg, index) => (
                <div className="card mb-3" key={`${details.hash}_${index}`}>
                  <div className="card-header">Type: {msg.type}</div>
                  <ul className="list-group list-group-flush">
                    {types.isMsgExecuteContract(msg) && <MsgExecuteContract msg={msg} />}
                    {types.isMsgSend(msg) && <MsgSend msg={msg} />}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>

        <FooterRow />
      </div>
    </div>
  );
}