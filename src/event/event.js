//  Import CSS.
import './editor.scss';
import './style.scss';

import EventsEdit from './edit'

const {
	InnerBlocks,
	withColors,
	getColorClassName,
	RichText,
} = wp.blockEditor;

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks


registerBlockType('wwx/event', {
	title: __('Timeline Block'), // Block title.
	icon: 'text-page', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	parent: ['wwx/timeline'],
	keywords: [
		__('event'),
	],
	attributes: {
		alignment: {
			type: 'string',
			default: 'left',
		},
		milestone: {
			type: "string",
			default: '1',
		},
		milestoneColor: {
			type: 'string'
		},
		customMilestoneColor: {
			type: 'string',
			default: "#ffffff"
		},
		milestoneBackground: {
			type: 'string',
		},
		customMilestoneBackground: {
			type: 'string',
			default: "#212121"
		},
		dividerBackground: {
			type: 'string'
		},
		customdividerBackground: {
			type: 'string'
		},
	},
	edit: withColors({ milestoneColor: 'color', milestoneBackground: 'background-color', dividerBackground: "background-color" })(EventsEdit),
	save: (props) => {

		const {
			alignment,
			milestone,
			milestoneColor,
			customMilestoneColor,
			milestoneBackground,
			customMilestoneBackground,
			dividerBackground,
			customdividerBackground
		} = props.attributes;

		let milestoneColorClass;
		let milestoneBackgroundClass;
		let mileStyles = {};

		

		if (milestoneColor !== undefined) {
			milestoneColorClass = getColorClassName('color', milestoneColor);
		}else if (customMilestoneColor !== undefined) {
			mileStyles.color = customMilestoneColor;
		}

		if (milestoneBackground !== undefined) {
			milestoneBackgroundClass = getColorClassName('background-color', milestoneBackground);
		}else if (customMilestoneBackground !== undefined) {
			mileStyles.background = customMilestoneBackground;
		}


		let dividerBackgroundClass;
		let dividerStyles = {};

		if (dividerBackground !== undefined) {
			dividerBackgroundClass = getColorClassName('background-color', dividerBackground);
		}
		if (customdividerBackground !== undefined) {
			dividerStyles.background = customdividerBackground;
		}

		return (
			<div>
				<div className={`event-wrapper ${alignment}`}>
					<div className={`divider ${dividerBackgroundClass}`} style={dividerStyles}> </div>
					<RichText.Content
						tagName={'div'}
						style={mileStyles}
						className={`milestone ${milestoneColorClass} ${milestoneBackgroundClass}`}
						value={milestone}
					/>
					<div className="event-content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},
});
