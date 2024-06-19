

export default function TollBarButton({children,onSelected,isSelected}){



   return <li><button className={isSelected ? "active":""} onClick={onSelected}>{children}</button></li>
}