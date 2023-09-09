import { IMenuItem } from "../../mocks/menuList";

export type TClickMenu = (item: IMenuItem, subMenuOf?: IMenuItem) => void
export interface IMenuProps {
  onClickItem: TClickMenu
}
