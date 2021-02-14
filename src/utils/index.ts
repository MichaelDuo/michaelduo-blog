import _ from 'lodash';

export function getTags(tagsStr: string): string[] {
	return _.split(_.lowerCase(_.replace(tagsStr, /\s/g, '')), ' ');
}
