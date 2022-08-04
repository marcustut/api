package model

import (
	"github.com/zeromicro/go-zero/core/stores/cache"
	"github.com/zeromicro/go-zero/core/stores/sqlx"
)

var _ AmaUsersModel = (*customAmaUsersModel)(nil)

type (
	// AmaUsersModel is an interface to be customized, add more methods here,
	// and implement the added methods in customAmaUsersModel.
	AmaUsersModel interface {
		amaUsersModel
	}

	customAmaUsersModel struct {
		*defaultAmaUsersModel
	}
)

// NewAmaUsersModel returns a model for the database table.
func NewAmaUsersModel(conn sqlx.SqlConn, c cache.CacheConf) AmaUsersModel {
	return &customAmaUsersModel{
		defaultAmaUsersModel: newAmaUsersModel(conn, c),
	}
}
