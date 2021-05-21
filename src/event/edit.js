const { Fragment } = wp.element;

const {
	InspectorControls, 
    PanelColorSettings,
	RichText,
    InnerBlocks,
    BlockAlignmentToolbar,
    BlockControls
} = wp.blockEditor;

const EventsEdit = (props) => {

    const {
        attributes:{ 
            alignment,
            milestone,
            customdividerBackground,
        }, setAttributes, className, 
            milestoneColor, setMilestoneColor, 
            milestoneBackground, setMilestoneBackground,
            dividerBackground, setDividerBackground        
        } = props;

    let milestoneColorClass;
    let milestoneBackgroundClass;
    let dividerBackgroundClass;
    let milestoneStyles = {};
    
    let dividerStyles = {};

    if (dividerBackground != undefined) {
        if (dividerBackground.class !== undefined) {
            dividerBackgroundClass = dividerBackground.class;
        } else {
            
            dividerStyles.background = dividerBackground.color;
        }

    }

    if (milestoneColor !== undefined) {
        if (milestoneColor.class != undefined) {
            milestoneColorClass = milestoneColor.class;
        } else {
            milestoneStyles.color = milestoneColor.color;
        }
    }

    if (milestoneBackground !== undefined) {
        if (milestoneBackground.class != undefined) {
            milestoneBackgroundClass = milestoneBackground.class;
        } else {
            milestoneStyles.background = milestoneBackground.color;
        }
    }

    const TEMPLATE = [
          [ 'core/heading', { placeholder: 'Title' } ],
          [ 'core/paragraph', { placeholder: 'Add content here...' } ],
      ];

    return (
        <Fragment>
			<InspectorControls>
				<PanelColorSettings 
					title={'Milestone Color settings'}
					colorSettings={[
						{
							value: milestoneColor.color,
							onChange: setMilestoneColor,
							label: 'Text color'
						},
                        {
							value: milestoneBackground.color,
							onChange: setMilestoneBackground,
							label: 'Background color'
						},
                        {
							value: dividerBackground.color,
							onChange: setDividerBackground,
							label: 'Divider color'
						}
					]}
				/>
			</InspectorControls>
            <BlockControls>
                        <BlockAlignmentToolbar
                        controls={["left" , "right"]}
                            value={ alignment }
                            onChange={ ( newAlignment ) => {
                                setAttributes( {
                                    alignment: newAlignment === undefined ? 'left' : newAlignment,
                                } );
                            } }
                        /> 
            </BlockControls>
			<div className={`${className} ${alignment}`} >
                <div className={`divider ${dividerBackgroundClass}`} style={dividerStyles} ></div>
                <RichText
                    className={	`milestone ${milestoneColorClass} ${milestoneBackgroundClass}`}
                    style={milestoneStyles}
                    tagName={ "div" }
                    onChange={ ( newContent ) => {
                        setAttributes( { milestone: newContent } );
                    } }
                    value={ milestone }
                />
                <div className="event-content">
                    <InnerBlocks allowedBlocks={['core/paragraph', 'core/image', 'core/button', 'core/spacer', 'core/heading']} template={ TEMPLATE } />
                </div>
                
			</div>
		</Fragment>
    );

}

export default EventsEdit;