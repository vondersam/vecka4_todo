export default function isOverdue(item) {
  return !item.complete && item.timestampDue < new Date().getTime();
}
