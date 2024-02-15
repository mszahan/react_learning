import { IdValue } from '.';

export function isChecked(checkedId: IdValue[], idValue: IdValue) {
    return checkedId.includes(idValue);
}
