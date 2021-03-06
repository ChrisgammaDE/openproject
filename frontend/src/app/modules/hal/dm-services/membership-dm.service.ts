//-- copyright
// OpenProject is an open source project management software.
// Copyright (C) 2012-2020 the OpenProject GmbH
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See docs/COPYRIGHT.rdoc for more details.
//++

import {Injectable} from '@angular/core';
import {AbstractDmService} from "core-app/modules/hal/dm-services/abstract-dm.service";
import {MembershipResource} from "core-app/modules/hal/resources/membership-resource";
import {DmListParameter} from "core-app/modules/hal/dm-services/dm.service.interface";
import {CollectionResource} from "core-app/modules/hal/resources/collection-resource";
import {ProjectResource} from "core-app/modules/hal/resources/project-resource";

@Injectable()
export class MembershipDmService extends AbstractDmService<MembershipResource> {
  public listAvailableProjects(params:DmListParameter|null) {
    return this.listRequest(this.availableProjectsUrl(), params) as Promise<CollectionResource<ProjectResource>>;
  }

  protected listUrl() {
    return this.pathHelper.api.v3.memberships.toString();
  }

  protected oneUrl(id:number|string) {
    return this.pathHelper.api.v3.memberships.id(id).toString();
  }

  protected availableProjectsUrl() {
    return this.pathHelper.api.v3.memberships.available_projects.toString();
  }
}
