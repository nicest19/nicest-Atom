'use strict';

/**
 * @module team/handler/redirect
 */

/**
 * Redirects to list of Teams
 * @param {Request} request - Hapi request
 * @param {Reply} reply - Hapi Reply
 * @returns {Null} responds with a redirect
 */
function redirect (request, reply) {
    const {prefix} = request.route.realm.modifiers.route;

    reply().redirect(`${prefix}/recipe/manage-teams/list`);
}

module.exports = redirect;
