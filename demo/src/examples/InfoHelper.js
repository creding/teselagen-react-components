<div>
  Default:
  <br />
  <InfoHelper content={"Hey I'm some helpful info!"} />
  As Button disabled:
  <br />
  <InfoHelper isButton disabled content={"Hey I'm some helpful info!"} />
  displayToSide :
  <br />
  <InfoHelper displayToSide content={"Hey I'm some helpful info!"} />
  <br />
  As different icon (icon="align-left"):
  <br />
  <InfoHelper icon="align-left" content={"Hey I'm some helpful info!"} />
  <br />
  As Button (isButton=true):
  <br />
  <InfoHelper
    isButton
    text="Hello world!"
    icon="align-left"
    content={"Hey I'm some helpful info!"}
  />
  <br />
  size=45
  <br />
  <InfoHelper size={45} content={"Hey I'm some helpful info!"} />
  <br />
  isPopover=true
  <br />
  <InfoHelper isPopover content={"Hey I'm some helpful info!"} />
  <br />
  isPopover=true size=30
  <br />
  <InfoHelper size={30} isPopover content={"Hey I'm some helpful info!"} />
  <br />
  absolute positioned!
  <br />
  <InfoHelper
    className={Classes.LARGE}
    isPopover
    content={"Hey I'm some helpful info!"}
  />
  <br />
  <div
    style={{
      position: "relative",
      height: 300,
      width: 300,
      background: "lightgrey"
    }}
  >
    <InfoHelper
      content={"Hey I'm some helpful info!"}
      style={{ position: "absolute", right: 0, bottom: 0 }}
    />
  </div>
</div>;
