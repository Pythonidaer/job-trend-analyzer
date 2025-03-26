# Domain Model

## Entities

- `User`
- `JobPosting`
- `Tag`
- `ConfidenceTracker`
- `Resume`
- `Curriculum`
- `Dashboard`
- `Filter`
- `Note`
- `QueryView`

## Attributes and Operations

### `User`

- ID: string  
- Email: string  
- Name: string  
- Authenticated: boolean  
- Settings: object  
- `createJobPosting()`  
- `tagSegment(JobPosting.ID, Tag.Type)`  
- `rateConfidence(Skill.ID, number)`  
- `createResume(type: string)`  
- `createCurriculum()`  
- `saveDashboardNote()`  
- `saveFilter(Filter)`  
- `buildQueryView()`  
- `subscribeToEmailUpdates()`  

### `JobPosting`

- ID: string  
- Title: string  
- Description: string  
- CreatedBy: User.ID  
- Tags: Tag[]  
- `parseTextToSegments()`  
- `edit()`  
- `delete()`  

### `Tag`

- ID: string  
- Label: string  
- Type: enum (HardSkill | SoftSkill | Phrase)  
- ColorCode: string  
- LinkedTo: JobPosting.ID  

### `ConfidenceTracker`

- ID: string  
- UserID: string  
- Title: string  
- Skills: [Tag.ID, number][]  
- `addSkillConfidence(Tag.ID, rating: number)`  
- `removeSkill(Tag.ID)`  

### `Resume`

- ID: string  
- UserID: string  
- Type: enum (IdealCandidate | SkillBase)  
- SkillsIncluded: Tag[]  
- `addSkill(Tag.ID)`  
- `removeSkill(Tag.ID)`  
- `export(format: string)`  

### `Curriculum`

- ID: string  
- UserID: string  
- Title: string  
- Cards: CurriculumCard[]  
- `addCard(CurriculumCard)`  
- `rateSkillInCard(Tag.ID, rating: number)`  
- `addNoteToCard(text: string)`  

### `CurriculumCard`

- ID: string  
- Text: string  
- Link: string  
- ButtonText: string  

### `Dashboard`

- ID: string  
- UserID: string  
- Visualizations: Visualization[]  
- Notes: Note[]  
- Filters: Filter[]  
- `updateVisualizationSettings()`  
- `saveNote()`  

### `Filter`

- ID: string  
- JobTitle: string  
- SkillKeyword: string  
- PhraseType: string  
- `applyToDashboard()`  
- `save()`  

### `Note`

- ID: string  
- UserID: string  
- DashboardID: string  
- Content: string  

### `QueryView`

- ID: string  
- UserID: string  
- FilterQuery: string  
- `displayResults()`  

## Class Diagram

_(Placeholder)_  
You can integrate a diagram using tools like Lucidchart or Mermaid to visualize these relationships.