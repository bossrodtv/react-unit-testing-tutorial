import { getAvatarData } from './get-avatar-data';

export function Avatar() {
  const data = getAvatarData();

  return (
    <div aria-label="avatar">
      Avatar
      <div>Some components with functionality of menus or something</div>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
}
