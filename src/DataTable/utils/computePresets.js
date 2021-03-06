import { omitBy, isNil } from "lodash";
//we use this to make adding preset prop groups simpler
export default function computePresets(props) {
  const { isSimple } = props;
  let toReturn = omitBy(props, isNil);

  if (isSimple) {
    //isSimplePreset
    toReturn = {
      noHeader: true,
      noFooter: !props.withPaging,
      noPadding: true,
      noFullscreenButton: true,
      hidePageSizeWhenPossible: !props.withPaging,
      isInfinite: !props.withPaging,
      hideSelectedCount: true,
      withTitle: false,
      withSearch: false,
      withPaging: false,
      withFilter: false,
      ...toReturn
    };
  } else {
    toReturn = {
      // the usual defaults:
      noFooter: false,
      noPadding: false,
      noFullscreenButton: false,
      hidePageSizeWhenPossible: false,
      isInfinite: false,
      hideSelectedCount: false,
      withTitle: true,
      withSearch: true,
      withPaging: true,
      withFilter: true,
      ...toReturn
    };
  }
  return toReturn;
}
