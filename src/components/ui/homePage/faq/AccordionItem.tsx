/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/


import React from "react";
import styles from "@/components/ui/homePage/faq/FAQ.module.scss";

const AccordionItem: React.FC<{
    question: string,
    answer: string | JSX.Element,
    id: string,
    isOpen: boolean,
    toggleOpen: () => void
}> = ({question, answer, id, isOpen, toggleOpen}) => (
    <>
        <h2 id={`${id}-heading`}>
            <button
                type="button"
                onClick={toggleOpen}
                className={`${styles.buttonLine}`}
                data-accordion-target={`#${id}-body`}
                aria-expanded={isOpen}
                aria-controls={`${id}-body`}>
                <span>{question}</span>
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true" role="img"
                     className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen ? 'rotate-180' : ''}`}
                     preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                            fill="#000000"></path>
                    </g>
                </svg>
            </button>
        </h2>
        <div id={`${id}-body`} className={isOpen ? "" : "hidden"} aria-labelledby={`${id}-heading`}>
            <div className={styles.answerBlock}>
                {answer}
            </div>
        </div>
    </>
);

export default AccordionItem;