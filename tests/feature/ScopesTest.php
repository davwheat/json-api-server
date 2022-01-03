<?php

/*
 * This file is part of tobyz/json-api-server.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tobyz\Tests\JsonApiServer\feature;

use Tobyz\JsonApiServer\JsonApi;
use Tobyz\JsonApiServer\Context;
use Tobyz\JsonApiServer\Schema\Type;
use Tobyz\Tests\JsonApiServer\AbstractTestCase;
use Tobyz\Tests\JsonApiServer\MockAdapter;

class ScopesTest extends AbstractTestCase
{
    /**
     * @var JsonApi
     */
    private $api;

    /**
     * @var MockAdapter
     */
    private $adapter;

    private $scopeWasCalled = false;

    public function setUp(): void
    {
        $this->adapter = new MockAdapter();
        $this->scopeWasCalled = false;

        $this->api = new JsonApi('http://example.com');
        $this->api->resourceType('users', $this->adapter, function (Type $type) {
            $type->updatable();
            $type->deletable();
            $type->scope(function ($query, Context $context) {
                $this->scopeWasCalled = true;
            });
        });
    }

    public function test_scopes_are_applied_to_the_resource_listing_query()
    {
        $this->api->handle(
            $this->buildRequest('GET', '/users')
        );

        $this->assertTrue($this->scopeWasCalled);
    }

    public function test_scopes_are_applied_to_the_show_resource_query()
    {
        $this->api->handle(
            $this->buildRequest('GET', '/users/1')
        );

        $this->assertTrue($this->scopeWasCalled);
    }

    public function test_scopes_are_applied_to_the_update_resource_query()
    {
        $this->api->handle(
            $this->buildRequest('PATCH', '/users/1')
                ->withParsedBody([
                    'data' => [
                        'type' => 'users',
                        'id' => '1'
                    ]
                ])
        );

        $this->assertTrue($this->scopeWasCalled);
    }

    public function test_scopes_are_applied_to_the_delete_resource_query()
    {
        $this->api->handle(
            $this->buildRequest('DELETE', '/users/1')
        );

        $this->assertTrue($this->scopeWasCalled);
    }
}
