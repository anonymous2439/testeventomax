import * as styles from "../../../styles/modules/sections/articles/Articles.module.scss";
import Link from "next/link";

export default function ArticleSidebar() {
	return (
		<div>
			Sidebar
            <ul>
            {
                // titles.map(title => {
                //     return <li key="{title.title}">
                //         <Link href={`/articles/` + title.slug}>{title.title}</Link>
                //         </li>;
                // })
            }
            </ul>
		</div>
	);
}
