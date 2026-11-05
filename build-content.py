from pathlib import Path
import json,base64
root=Path(__file__).parent
src=root/'content/homepage-reference.png'
b64=base64.b64encode(src.read_bytes()).decode()
crops=[('hero',530,90,410,385),('short-video-scriptwriter',54,735,276,172),('product-photo-prompt-pack',359,735,276,172),('clean-reel-captions',658,735,272,172),('landing-page-reviewer',54,1074,276,179),('brand-moodboard-prompts',360,1074,275,179),('minimal-product-showcase',657,1074,272,179)]
for name,x,y,w,h in crops:
 svg=f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{w*3}" height="{h*3}" viewBox="{x} {y} {w} {h}"><title>ANX Studio — {name.replace('-', ' ')} design preview</title><image width="982" height="1601" xlink:href="data:image/png;base64,{b64}"/></svg>'''
 (root/f'dist/assets/{name}.svg').write_text(svg)
items=[
('short-video-scriptwriter','Short Video Scriptwriter','skills','Generate engaging short-form video scripts for TikTok, Reels, and Shorts.','Turn an idea into a clear hook, scene outline, narration, and call to action.',['Hook and audience brief','Scene-by-scene script structure','Narration and caption suggestions'],'Supply your topic, target audience, and desired duration. Review the script and adapt the claims before publishing.'),
('product-photo-prompt-pack','Product Photo Prompt Pack','prompts','Ready-to-customize prompts for product photography concepts.','Plan clean studio shots, natural-light scenes, and editorial product visuals.',['Studio lighting directions','Material and background prompts','Composition and negative-space options'],'Replace the product, brand colors, materials, and setting placeholders. Results depend on the image tool and reference images.'),
('clean-reel-captions','Clean Reel Captions','templates','Animated caption styling for modern vertical videos.','A clean caption concept with blue, purple, and cyan highlights.',['Vertical caption layout concept','Color and typography reference','Preview of the intended editing style'],'A real CapCut project or published template link must be added before this resource can be published.'),
('landing-page-reviewer','Landing Page Reviewer','skills','Get a clear review of your landing page content and structure.','Review a page for clarity, navigation, visual hierarchy, and calls to action.',['Value proposition review','Mobile readability checklist','Prioritized improvement suggestions'],'Provide the page text or screenshots and explain its audience and main action. Review recommendations in context.'),
('brand-moodboard-prompts','Brand Moodboard Prompts','prompts','Explore visual directions for your next brand concept.','Use structured prompts to explore colors, materials, imagery, and mood.',['Brand personality questions','Moodboard composition prompts','Color and texture directions'],'Describe your audience, brand personality, and visual constraints. Refine the direction with your own references.'),
('minimal-product-showcase','Minimal Product Showcase','templates','A sleek vertical video concept for product presentations.','An editorial product presentation with generous spacing and refined typography.',['9:16 showcase concept','Product title and detail layout','Visual pacing reference'],'A real CapCut project or published template link must be added before this resource can be published.')]
data=[]
for slug,title,category,desc,overview,features,how in items:
 data.append(dict(slug=slug,title=title,category=category,description=desc,overview=overview,features=features,howToUse=how,image=f'assets/{slug}.svg',contentStatus='preview',downloadUrl='',previewVideoUrl='',requiresPro=None))
config=dict(brand='ANX Studio',domain='anxstudiodigital.com',language='en',socials=dict(instagram='https://www.instagram.com/anx.studio.digital/',tiktok='https://www.tiktok.com/@anassidky882',youtube='https://www.youtube.com/channel/UC2mv4DfK7O_b3Ghnu4fk3_w'),resources=data)
if (root/'content/resources.json').exists():
 config=json.loads((root/'content/resources.json').read_text())
else:
 (root/'content/resources.json').write_text(json.dumps(config,indent=2))
(root/'dist/resources.js').write_text('window.ANX_DATA = '+json.dumps(config,indent=2)+';\n')
